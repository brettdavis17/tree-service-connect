--
-- PostgreSQL database dump
--

\restrict lcKgt8CsXqHmOwUJJq592ThWm0XE2cJ0T1TdgRwzTxy73isxosuFyyaBxMwFHDG

-- Dumped from database version 17.6 (Postgres.app)
-- Dumped by pg_dump version 17.6 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: companies; Type: TABLE; Schema: public; Owner: brettdavis
--

CREATE TABLE public.companies (
    id text NOT NULL,
    place_id text NOT NULL,
    name text NOT NULL,
    phone text,
    address text,
    website text,
    rating double precision,
    review_count integer,
    latitude double precision,
    longitude double precision,
    business_status text,
    types text,
    price_level integer,
    city text,
    state text,
    services text[],
    service_radius integer,
    has_insurance boolean,
    has_crane boolean,
    emergency_service boolean,
    pricing_tier text,
    years_in_business integer,
    "isActive" boolean DEFAULT true NOT NULL,
    subscription_tier text,
    monthly_fee double precision,
    lead_price double precision,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    last_data_update timestamp(3) without time zone
);


ALTER TABLE public.companies OWNER TO brettdavis;

--
-- Name: lead_distributions; Type: TABLE; Schema: public; Owner: brettdavis
--

CREATE TABLE public.lead_distributions (
    id text NOT NULL,
    lead_id text NOT NULL,
    company_id text NOT NULL,
    price double precision NOT NULL,
    status text DEFAULT 'sent'::text NOT NULL,
    response_time integer,
    sent_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    viewed_at timestamp(3) without time zone,
    responded_at timestamp(3) without time zone
);


ALTER TABLE public.lead_distributions OWNER TO brettdavis;

--
-- Name: leads; Type: TABLE; Schema: public; Owner: brettdavis
--

CREATE TABLE public.leads (
    id text NOT NULL,
    customer_name text NOT NULL,
    customer_phone text NOT NULL,
    customer_email text,
    property_address text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    latitude double precision,
    longitude double precision,
    service_type text[],
    tree_count text NOT NULL,
    tree_size text[],
    near_structures text[],
    urgency text NOT NULL,
    budget_range text,
    description text,
    photos text[],
    status text DEFAULT 'new'::text NOT NULL,
    lead_price double precision,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.leads OWNER TO brettdavis;

--
-- Name: users; Type: TABLE; Schema: public; Owner: brettdavis
--

CREATE TABLE public.users (
    id text NOT NULL,
    email text NOT NULL,
    name text,
    role text DEFAULT 'company'::text NOT NULL,
    company_id text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO brettdavis;

--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: brettdavis
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);


--
-- Name: lead_distributions lead_distributions_pkey; Type: CONSTRAINT; Schema: public; Owner: brettdavis
--

ALTER TABLE ONLY public.lead_distributions
    ADD CONSTRAINT lead_distributions_pkey PRIMARY KEY (id);


--
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: brettdavis
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: brettdavis
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: companies_place_id_key; Type: INDEX; Schema: public; Owner: brettdavis
--

CREATE UNIQUE INDEX companies_place_id_key ON public.companies USING btree (place_id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: brettdavis
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: lead_distributions lead_distributions_company_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brettdavis
--

ALTER TABLE ONLY public.lead_distributions
    ADD CONSTRAINT lead_distributions_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.companies(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: lead_distributions lead_distributions_lead_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: brettdavis
--

ALTER TABLE ONLY public.lead_distributions
    ADD CONSTRAINT lead_distributions_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES public.leads(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

\unrestrict lcKgt8CsXqHmOwUJJq592ThWm0XE2cJ0T1TdgRwzTxy73isxosuFyyaBxMwFHDG

