require 'sinatra'

get '/' do
	erb :home
end

get '/contact' do
	erb :contact
end

get '/services' do 
	erb :layout
end

get '/signup' do
	erb :signup
end

get '/watchers' do
	erb :watchers
end

get '/services' do
	erb :services
end