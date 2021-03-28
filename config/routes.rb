Rails.application.routes.draw do

  scope 'api' do
    devise_for :users
  
    get '/dashboard/home', to: 'dashboard#home'
    
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
