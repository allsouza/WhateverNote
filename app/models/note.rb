class Note < ApplicationRecord
    validates :author_id, :notebook_id, :title, presence: true

    after_initialize :ensure_notebook

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: :Notebook

    def ensure_notebook
        self.notebook_id ||= Notebook.first.id
    end
end
