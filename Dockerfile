# Dockerfile
FROM ruby:3.1

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# 作業ディレクトリの設定
WORKDIR /myapp

# GemfileとGemfile.lockをコピー
COPY Gemfile* ./

# Gemのインストール
RUN bundle install

# アプリケーションコードをコピー
COPY . .

# ポートの指定
EXPOSE 3000

# Railsサーバの起動
CMD ["rails", "server", "-b", "0.0.0.0"]
