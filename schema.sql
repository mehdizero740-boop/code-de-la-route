-- À exécuter une fois dans Supabase : Dashboard > SQL Editor > New query > coller > Run

create table if not exists public.question_stats (
  user_id uuid references auth.users(id) on delete cascade not null,
  question_id text not null,
  seen int not null default 0,
  correct int not null default 0,
  wrong int not null default 0,
  streak int not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, question_id)
);

alter table public.question_stats enable row level security;

-- Chaque utilisateur ne peut lire / écrire que ses propres statistiques.
create policy "select own stats"
  on public.question_stats for select
  using (auth.uid() = user_id);

create policy "insert own stats"
  on public.question_stats for insert
  with check (auth.uid() = user_id);

create policy "update own stats"
  on public.question_stats for update
  using (auth.uid() = user_id);
