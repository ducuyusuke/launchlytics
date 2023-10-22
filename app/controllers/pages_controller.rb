class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :teste ]

  def home
  end

  def teste
  end
end
