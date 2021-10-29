Rails.application.routes.draw do
  # root to: 'products#index'
  # resources :products, only: [:index, :show]
  # resources :categories, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do # /api/data

  root to: 'products#index'
  resources :products, only: [:index, :show]
  resources :categories, only: [:index]
  resources :features, only: [:index]
  resources :comparisons, only: [:index, :create]

  get 'comparisons/index'

  

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end