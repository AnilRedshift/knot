defmodule Knot.Schema.Types do
  use Absinthe.Schema.Notation
  object :comment do
    field :author, :string
    field :content, :string
  end
end
