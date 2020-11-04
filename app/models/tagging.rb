class Tagging < ApplicationRecord
    validates :tag, uniqueness: { scope: :note }

    belongs_to :tag
    belongs_to :note
end
