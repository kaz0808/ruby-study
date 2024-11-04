class PostsController < ApplicationController
  def index
    @post = Post.new                            # 新規投稿フォーム用のインスタンス
    if params[:category].present?
      @posts = Post.where(category: params[:category]).order(created_at: :desc)
    else
      @posts = Post.all.order(created_at: :desc)
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path, notice: '投稿が作成されました'
    else
      @posts = Post.all.order(created_at: :desc)
      render :index
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      redirect_to root_path, notice: '投稿が削除されました'
    else
      redirect_to root_path, alert: '投稿の削除に失敗しました'
    end
  end

  def edit
    @post = Post.find(params[:id])  # 編集する投稿を取得
  end

  def update
    @post = Post.find(params[:id])  # 投稿を取得
    if @post.update(post_params)     # 投稿を更新
      redirect_to root_path, notice: '投稿が更新されました'
    else
      render :edit                     # エラーがあれば再度編集画面を表示
    end
  end

  private

  def post_params
    params.require(:post).permit(:category, :priority, :title, :content)  # idは削除
  end
end
