Rails.application.routes.draw do
  root to: 'messages#show'

  get '/messages', to: 'messages#show'
end
