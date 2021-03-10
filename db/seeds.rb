# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

# 5.times do |i|
#   Food.create(
#   name:Faker::Food.dish)
#   Food.find(params[:food_id]).restaurant.create(
#   name:Faker::Restaurant.name,
#   address:Faker::Address.state_abbr)
# end 


5.times do
  s = Food.create(name: Faker::Food.dish)
  4.times do 
    s.restaurants.create(name: Faker::Restaurant.name, address: Faker::Address.state_abbr)
  end
end

5.times do
  Cook.create(name: Faker::TvShows::BojackHorseman.character, specialty: Faker::Restaurant.type )
end  