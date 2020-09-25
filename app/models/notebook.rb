class Notebook < ApplicationRecord
    validates :name, :author_id, presence: true

    has_many :notes,
        foreign_key: :notebook_id

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
