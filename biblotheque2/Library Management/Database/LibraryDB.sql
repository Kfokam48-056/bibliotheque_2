PGDMP  (    	    
             }            library %   14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)     17.2 (Ubuntu 17.2-1.pgdg22.04+1)     /           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            0           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            1           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            2           1262    16612    library    DATABASE     s   CREATE DATABASE library WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE library;
                     postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                     postgres    false            3           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                        postgres    false    4            �            1259    16614    books    TABLE     �   CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    category character varying(100),
    copies integer NOT NULL
);
    DROP TABLE public.books;
       public         heap r       postgres    false    4            �            1259    16613    books_id_seq    SEQUENCE     �   CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.books_id_seq;
       public               postgres    false    210    4            4           0    0    books_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;
          public               postgres    false    209            �            1259    16666    loans    TABLE     �   CREATE TABLE public.loans (
    id integer NOT NULL,
    member_id integer,
    book_id integer,
    date_loan date NOT NULL,
    date_return_preview date NOT NULL,
    date_return_effective date,
    penalty money
);
    DROP TABLE public.loans;
       public         heap r       postgres    false    4            �            1259    16665    loans_id_seq    SEQUENCE     �   CREATE SEQUENCE public.loans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.loans_id_seq;
       public               postgres    false    214    4            5           0    0    loans_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.loans_id_seq OWNED BY public.loans.id;
          public               postgres    false    213            �            1259    16623    members    TABLE     �   CREATE TABLE public.members (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    first_name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    membershipdate date NOT NULL
);
    DROP TABLE public.members;
       public         heap r       postgres    false    4            �            1259    16622    members_id_seq    SEQUENCE     �   CREATE SEQUENCE public.members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.members_id_seq;
       public               postgres    false    4    212            6           0    0    members_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.members_id_seq OWNED BY public.members.id;
          public               postgres    false    211            �           2604    16617    books id    DEFAULT     d   ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);
 7   ALTER TABLE public.books ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    210    209    210            �           2604    16669    loans id    DEFAULT     d   ALTER TABLE ONLY public.loans ALTER COLUMN id SET DEFAULT nextval('public.loans_id_seq'::regclass);
 7   ALTER TABLE public.loans ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    214    213    214            �           2604    16626 
   members id    DEFAULT     h   ALTER TABLE ONLY public.members ALTER COLUMN id SET DEFAULT nextval('public.members_id_seq'::regclass);
 9   ALTER TABLE public.members ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    211    212    212            (          0    16614    books 
   TABLE DATA           D   COPY public.books (id, title, author, category, copies) FROM stdin;
    public               postgres    false    210   �        ,          0    16666    loans 
   TABLE DATA           w   COPY public.loans (id, member_id, book_id, date_loan, date_return_preview, date_return_effective, penalty) FROM stdin;
    public               postgres    false    214   �"       *          0    16623    members 
   TABLE DATA           N   COPY public.members (id, name, first_name, email, membershipdate) FROM stdin;
    public               postgres    false    212   �"       7           0    0    books_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.books_id_seq', 31, true);
          public               postgres    false    209            8           0    0    loans_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.loans_id_seq', 4, true);
          public               postgres    false    213            9           0    0    members_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.members_id_seq', 1, true);
          public               postgres    false    211            �           2606    16621    books books_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public                 postgres    false    210            �           2606    16671    loans loans_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.loans
    ADD CONSTRAINT loans_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.loans DROP CONSTRAINT loans_pkey;
       public                 postgres    false    214            �           2606    16628    members member_id_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.members
    ADD CONSTRAINT member_id_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.members DROP CONSTRAINT member_id_pkey;
       public                 postgres    false    212            �           2606    16630    members members_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.members DROP CONSTRAINT members_email_key;
       public                 postgres    false    212            �           2606    16677    loans loans_book_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.loans
    ADD CONSTRAINT loans_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.loans DROP CONSTRAINT loans_book_id_fkey;
       public               postgres    false    214    3219    210            �           2606    16672    loans loans_member_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.loans
    ADD CONSTRAINT loans_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id) ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.loans DROP CONSTRAINT loans_member_id_fkey;
       public               postgres    false    214    3221    212            (   �  x����n�0Eף��/(L��c�$��A��@6���H"̇@�.��/i+rPt�sf���������g�b�R�hu
�����q��i�M��HR8,פ?����SN�*F�/[;j\������>��yx�S�0t��@�&̓>i�!uG/��CT�O�t��^3xu��+Bی*�&��������=�;k��xdu���j���Ӹ����Z�c�̚����2������X��l�Wg��1�1-�X�ʸ;޶l(u����U�����;ŐbI*�f��uJj2��n��]`}�pg=�|\�U�f�UXc�(.B�\��ї1��l/�Gt&e��`��M�p�a������Wgi��w'��l9�yz������k�ɧ��4�w�'=v���Q�J?���#}i�ɗ�|��O3�:��e��L~��/��*s�U�|)��/t~��      ,   )   x�3�4B##S]C]c8�����eRG��=... ��      *   2   x�3�t�L�.�K���������z����FF����F\1z\\\ W��     