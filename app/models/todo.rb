class Todo < ApplicationRecord
    enum status: { incomplete: 0, complete: 1 }
  
    def toggle
      incomplete? ? complete! : incomplete!
    end
  end
  