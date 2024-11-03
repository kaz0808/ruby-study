Rails.application.routes.draw do
  root 'posts#index'        # トップページを投稿一覧に設定
  resources :posts, only: [:index, :create, :destroy, :destroy, :edit, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
