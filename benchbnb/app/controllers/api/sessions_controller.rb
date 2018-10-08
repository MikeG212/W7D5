class Api::SessionsController < ApplicationController

  def destroy
    if current_user
      render {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
