class UsersController < ApplicationController
  # GET /users.json
  def index
    @users = User.all

    respond_to do |format|
      format.json  { render :json => {records: @users.map(&:to_record), success: 'true'} }
    end
  end

  # POST /users.json
  def create
    record = params[:record]
    user = User.find(record[:id])
    respond_to do |format|
      if user.update_attributes(record)
        format.json  { render :json => { success: true }, :status => :ok }
      else
        format.json  { render :json => { success: false, message: @user.errors }, :status => :unprocessable_entity }
      end
    end

  end

end
