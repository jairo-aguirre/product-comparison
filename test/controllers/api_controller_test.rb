require "test_helper"

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get tests" do
    get api_tests_url
    assert_response :success
  end
end
