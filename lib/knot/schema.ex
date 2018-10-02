defmodule Knot.Schema do

  use Absinthe.Schema
  import_types Knot.Schema.Types

  @comments [
    %{
      author: "Ada",
      body: "bearz"
    },
    %{
      author: "Stacey",
      body: "cats"
    }
  ]

  query do
    @desc "Get a list of comments"
    field :comments, list_of(:comment) do
      resolve fn _, _ ->
        {:ok, @comments}
      end
    end
  end

end
