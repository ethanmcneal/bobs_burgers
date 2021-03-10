class Api::CooksController < ApplicationController


def index
  render json: Cook.all
end

def show
  cook = Cook.find(params[:id])
  render json: {cook: cook}
end

def create
  cook = Cook.new(cook_params)
  if cook.save
      render json: cook
  else
    render json: { errors: cook.errors }, status: :unprocessable_entity
  end
end

def update
  cook = Cook.find(params[:id])
  if cook.update(cook_params)
    render json: cook
  else
    render json: { errors: cook.errors }, status: :unprocessable_entity
  end
end

def destroy
  cook = Cook.find(params[:id]).destroy
  render json: cook
end

private

def cook_params
  params.require(:cook).permit(:name, :specialty)
end

end
