class ModelController < ApplicationController
  def model
    @model_name = params[:model]
    @model_config = @model_name.constantize.sencha_schema.merge(
      extend: 'Ext.data.Model'
    ).to_json
  end

  def store
    # plural
    @models_name = params[:model]
  end
end
