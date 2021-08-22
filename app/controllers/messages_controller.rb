class MessagesController < ApplicationController
  def show
    @messages = Message.all
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)

    unless @message.save
      if @message[:content].empty?
        error_msg = "Write something!"
      else
        error_msg = @message.errors.full_messages[0]
      end
    end

    redirect_to messages_path, alert: error_msg
  end

  private
  def message_params
    params.require(:message).permit(:content)
  end
end
