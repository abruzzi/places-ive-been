require 'csv'
require 'json'

lines = CSV.open("places-ive-been.csv").readlines
keys = lines.delete lines.first

File.open("places-ive-been.json", 'w') do |f|
    data = lines.map do |row|
        {
            :type => "Feature",
            :geometry => {
              :type => "Point",
              :coordinates => [row[2].to_f, row[1].to_f]
            },
            :properties => {
              :created_at => row[0]
            }
        }
    end

    f.puts JSON.pretty_generate({
        :type => "FeatureCollection",
        :crs => {
          :type => "name",
          :properties => {
            :name => "EPSG:4326"
          }
        },
        :features => data
    })
end
