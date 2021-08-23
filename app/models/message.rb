class Message < ApplicationRecord
  validates :content, presence: true

  def content=(val)
    write_attribute(:content, val.gsub(/Mconf/i, "Mconf"))
  end
end
