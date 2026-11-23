-- काम CLUB — Supabase PostgreSQL Schema & Row-Level Security (RLS)
-- Tagline: Less chaos, more kaam.

create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text not null,
  college text not null,
  course text not null,
  year text not null,
  bio text,
  skills text[] default '{}',
  hours_per_day numeric default 5,
  preferred_start text default '17:00',
  preferred_end text default '22:00',
  unavailable_days text[] default '{Sunday}',
  daily_task_limit integer default 4,
  created_at timestamptz default now()
);

create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  owner_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  category text not null,
  description text,
  deadline date not null,
  invite_code text unique not null,
  in_portfolio boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.project_members (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade,
  member_name text not null,
  member_email text not null,
  role text not null,
  joined_at timestamptz default now()
);

create table if not exists public.tasks (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  project_id uuid references public.projects(id) on delete cascade,
  title text not null,
  description text,
  category text not null,
  assignee text not null,
  deadline date not null,
  priority text check (priority in ('Low', 'Medium', 'High', 'Urgent')) default 'Medium',
  duration_hours numeric not null default 2,
  completed boolean default false,
  completed_at date,
  notes text,
  verification_status text check (verification_status in ('self', 'evidence', 'verified')) default 'self',
  evidence_note text,
  verified_by text,
  created_at timestamptz default now()
);

create table if not exists public.milestones (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  title text not null,
  due_date date not null,
  completed boolean default false
);

-- Enable Row-Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.tasks enable row level security;
alter table public.milestones enable row level security;

-- RLS Policies: Students can only access their own private tasks or projects they are members of
create policy "Users can view and update own profile"
  on public.profiles for all
  using (auth.uid() = id);

create policy "Users can manage own tasks"
  on public.tasks for all
  using (auth.uid() = user_id);

create policy "Project members can view projects"
  on public.projects for select
  using (
    owner_id = auth.uid() or
    exists (select 1 from public.project_members pm where pm.project_id = id and pm.user_id = auth.uid())
  );
