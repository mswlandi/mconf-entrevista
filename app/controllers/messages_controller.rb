class MessagesController < ApplicationController
  def show
    @messages = Message.all
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)

    if @message.save
      redirect_to messages_path
    else
      flash[:error] = "Something went wrong"
      render :new
    end
  end

  private
  def message_params
    params.require(:message).permit(:content)
  end
end
