class MessagesController < ApplicationController
  def show
    @messages = Message.all
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)

    unless @message.save
      @error_msg = @message.errors.full_messages[0]
    end
  end

  private
  def message_params
    params.require(:message).permit(:content)
  end
end
