class Food < ApplicationRecord
    has_many :restaurants, dependant: :destroy
end
