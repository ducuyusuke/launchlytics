class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :teste ]

  # def home
  #   json_data = File.read('dataproc/teste.json')
  #   @graph_data = JSON.parse(json_data)
  #   # @graph_data = [12, 19, 3, 5, 2, 3].to_json
  #   @graph = [12, 19, 3, 5, 2, 3].to_json
    # @graph_polar = [20, 30, 55, 10, 35, 40].to_json
  # end

  def home
    # Read the JSON data from the file generated by the Python script
    json_data = File.read('dataproc/teste.json')

    # Parse the JSON data into a Ruby hash
    data = JSON.parse(json_data)
    @graph_data = []

    data.each do |k, v|
      campaign_name = k
      campaign_data = v || {}
      timestamps = campaign_data.keys.map(&:to_i)
      labels = timestamps.map { |timestamp| Time.at(timestamp / 1000).strftime('%Y-%m-%d') }
      values = campaign_data.values
      @graph_data << {
      labels: labels,
      datasets: [
        {
          label: campaign_name,
          data: values   # Set a border color
        }
      ]
    }
    end
    @graph_data
  end

end
