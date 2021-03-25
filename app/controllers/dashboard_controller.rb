class DashboardController < ApplicationController
    before_action :authenticate_user!


    def home
        render json: current_user
    end


end
