class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :teste ]

  def home
    @graph_data = [12, 19, 3, 5, 2, 3].to_json
    @graph = [12, 19, 3, 5, 2, 3].to_json
    @graph_polar = [20, 30, 55, 10, 35, 40].to_json
  end

  def teste
  end
end
