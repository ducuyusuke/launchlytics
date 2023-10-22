class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :teste ]

  def home
    @graph_data = [12, 19, 3, 5, 2, 3].to_json
  end

  def teste
  end
end
