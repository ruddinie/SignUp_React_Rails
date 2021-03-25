Rails.application.routes.draw do
  devise_for :users

  get '/dashboard/home', to: 'dashboard#home'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
