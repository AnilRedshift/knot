defmodule Knot.Comment do
  use Ecto.Schema
  import Ecto.Changeset


  schema "comments" do
    field :author, :string
    field :content, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(comment, attrs) do
    comment
    |> cast(attrs, [:author, :content])
    |> validate_required([:author, :content])
  end
end
