# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  email            :string           not null
#  session_token    :string           not null
#  password_digest  :string           not null
#  first_name       :string           not null
#  last_name        :string           not null
#  user_icon        :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  default_notebook :integer
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
