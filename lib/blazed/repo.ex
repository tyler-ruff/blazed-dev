defmodule Blazed.Repo do
  use Ecto.Repo,
    otp_app: :blazed,
    adapter: Ecto.Adapters.Postgres
end
