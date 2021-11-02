class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  
  private
  def comparison
    @comparison ||= cookies[:comparison].present? ? JSON.parse(cookies[:comparison]) : {}
    
  end
  helper_method :comparison

  def update_comparison(new_comparison)
    cookies[:comparison] = {
      value: JSON.generate(new_comparison),
      expires: 1.days.from_now
    }
    puts 'cookies'
    puts cookies[:comparison]
    cookies[:comparison]
  end
end
