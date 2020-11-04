class Tag < ApplicationRecord
    validates :name

    belongs_to :user,
        foreign_key: :author_id

    has_many :taggings

    has_many :notes,
        through: :taggings,
        source: :note
end
