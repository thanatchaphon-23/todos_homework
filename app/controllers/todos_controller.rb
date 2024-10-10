class TodosController < ApplicationController
    def index
      @todos = Todo.all
    end
  
    def create
      @todo = Todo.new(todo_params)
      if @todo.save
        render json: @todo, status: :created
      else
        render json: @todo.errors, status: :unprocessable_entity
      end
    end
  
    def toggle
      @todo = Todo.find(params[:id])
      @todo.toggle
      @todo.save
      render json: @todo
    end
  
    private
  
    def todo_params
      params.require(:todo).permit(:name) # Adjust if you have other fields
    end
  end
  