class Food < ApplicationRecord
    has_many :restaurants, dependent: :destroy
end
