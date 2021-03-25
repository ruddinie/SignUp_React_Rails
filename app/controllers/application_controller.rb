class ApplicationController < ActionController::API
    respond_to :json
    protect_from_forgery with: :exception

    before_action :configure_permitted_parameters, if: :devise_controller?

    def fallback_index_html
      render :file => 'public/index.html'
    end

    
     protected

          def configure_permitted_parameters
               devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password)}

               devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email, :password, :current_password)}
          end
end
