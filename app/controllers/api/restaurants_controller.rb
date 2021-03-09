class Api::RestaurantsController < ApplicationController

  before_action: set_food

  def index
    render json: @food.restaurant.all
  end

  def show
    render json: @food.restaurant.find(params[:id])
  end
  
  def create
    restaurant = @food.restaurant.new(restaurant_params)
    if restaurant.save
        render json: restaurant
    else
      render json: { errors: restaurant.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    restaurant = @food.restaurant.find(params[:id])
    if restaurant.update(restaurant_params)
      render json: restaurant
    else
      render json: { errors: restaurant.errors }, status: :unprocessable_entity
    end
  end
  
  def destroy
    restaurant = @food.restaurant.find(params[:id]).destroy
    render json: restaurant
  end
  
  private
  
  def restaurant_params
    params.require(:restaurant).permit(:name, :address)
  end

  def set_food
    @food = Food.find(params[:food_id])
  end


  
end
