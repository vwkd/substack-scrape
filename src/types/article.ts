/**
 * Generated with https://app.quicktype.io/
 */

export interface Article {
  isEU: boolean;
  language: string;
  country: string;
  base_url: string;
  stripe_publishable_key: string;
  captcha_site_key: string;
  confirmedLogin: boolean;
  hide_intro_popup: boolean;
  block_auto_login: boolean;
  domainInfo: DomainInfo;
  experimentFeatures: ExperimentFeatures;
  experimentExposures: ExperimentExposures;
  siteConfigs: SiteConfigs;
  publicationSettings: PublicationSettings;
  publicationUserSettings: null;
  userSettings: UserSettings;
  subscriberCountDetails: string;
  mux_env_key: string;
  sentry_environment: "production";
  launchWelcomePage: boolean;
  noIndex: boolean;
  post: Post;
  comments: Comment[];
  canonicalUrl: string;
  inlineComments: boolean;
  readerIsSearchCrawler: boolean;
  ogUrl: string;
  freeTrialCoupon?: FreeTrialCoupon;
  bannedFromNotes: boolean;
  themeVariables: ThemeVariables;
  recentEpisodes: null;
  trackFrontendVisit: boolean;
  isChatActive: boolean;
  isMeetingsActive: boolean;
  features: Features;
  showCookieBanner: boolean;
  disabledCookies: [];
  dd_env: "zuma-prod";
  dd_ti: boolean;
  user?: User;
  readerInstalledAt?: null;
  iba?: boolean;
}

export interface Comment {
  id: number;
  body: string;
  publication_id: number;
  post_id: number;
  user_id: number;
  ancestor_path: string;
  type: "comment";
  deleted: boolean;
  date: Date;
  edited_at: Date | null;
  reply_from_post_id: null;
  status: "published";
  pinned_by_user_id: null;
  restacks: number;
  name: string;
  photo_url: null | string;
  handle: string;
  reactions: Reactions;
  reactor_names: [];
  reaction: null;
  reaction_count: number;
  children: [];
  bans: [];
  suppressed: boolean;
  user_banned: boolean;
  user_banned_for_comment: boolean;
  user_slug: string;
  metadata: CommentMetadata;
  user_bestseller_tier: null;
  can_dm: boolean;
  score: number;
  children_count: number;
  reported_by_user: boolean;
  restacked: boolean;
  childrenSummary?: string;
}

export interface CommentMetadata {
  is_author: boolean;
  membership_state: MembershipState | null;
  eligibleForGift: boolean;
  author_on_other_pub?: AuthorOnOtherPub;
}

export interface AuthorOnOtherPub {
  name: string;
  id: number;
  base_url: string;
}

export type MembershipState = "subscribed" | "free_signup";

export interface Reactions {
  "❤": number;
}

export interface DomainInfo {
  isSubstack: boolean;
  customDomain: null;
}

export interface ExperimentExposures {
}

export interface Features {
}

export interface ExperimentFeatures {
  app_install_drawer_2?: string;
  mobile_feed_tabs?: "control";
  feed_digest_email_v2?: "control";
  stripe_link_in_payment_element?: "treatment";
  default_smart_delivery_on?: "control";
  onboarding_pymk?: "control";
  onboarding_retention_shuffle?: "control";
  pin_primary_publication_chat_web?: "control";
  notes_ranking_v30?: "treatment";
  new_note_notif_for_subscribers?: "treatment";
  daily_promoted_notes_longterm_2?: "treatment_supplement_with_backoff";
}

export interface FreeTrialCoupon {
  id: string;
}

export interface Post {
  id: number;
  editor_v2: boolean;
  publication_id: number;
  type: "newsletter";
  title: string;
  social_title: null;
  section_id: null;
  search_engine_title: null;
  search_engine_description: null;
  subtitle: string;
  slug: string;
  post_date: Date;
  podcast_url: null | string;
  podcast_art_url: null;
  podcast_duration: null;
  video_upload_id: null;
  podcast_upload_id: null;
  podcast_preview_upload_id: null;
  audience: Audience;
  should_send_free_preview: boolean;
  write_comment_permissions: Audience;
  show_guest_bios: boolean;
  free_unlock_required: boolean;
  default_comment_sort: null | string;
  canonical_url: string;
  audience_before_archived: Audience | null;
  exempt_from_archive_paywall: boolean;
  teaser_post_eligible: boolean;
  restacks: number;
  reactions: Reactions;
  top_exclusions: [];
  pins: [];
  section_pins: [];
  previous_post_slug: null | string;
  next_post_slug: null | string;
  cover_image: null | string;
  cover_image_is_square: boolean;
  cover_image_is_explicit: boolean;
  videoUpload: null;
  podcastFields: PodcastFields | null;
  podcastUpload: null;
  podcastPreviewUpload: null;
  voiceover_upload_id: null;
  voiceoverUpload: null;
  has_voiceover: boolean;
  description: string;
  body_html: string;
  longer_truncated_body_json: null;
  longer_truncated_body_html: null;
  truncated_body_text: string;
  wordcount: number;
  postTags: [];
  postCountryBlocks: [];
  publishedBylines: PublishedByline[];
  reaction: boolean | null;
  reaction_count: number;
  comment_count: number;
  child_comment_count: number;
  audio_items: AudioItem[];
  is_geoblocked: boolean;
  hidden?: boolean;
  hasCashtag: boolean;
  is_saved?: boolean;
  saved_at?: null;
  is_viewed?: boolean;
  read_progress?: number;
  max_read_progress?: number;
  audio_progress?: number;
  max_audio_progress?: number;
  video_progress?: number;
  max_video_progress?: number;
  restacked?: boolean;
}

export type Audience = "only_paid" | "everyone" | "none";

export interface AudioItem {
  post_id: number;
  voice_id: "en-US-JennyNeural";
  audio_url: null | string;
  type: "tts";
  status: "paywalled" | "completed";
}

export interface PodcastFields {
  post_id: number;
  podcast_episode_number: null;
  podcast_season_number: null;
  podcast_episode_type: null;
  should_syndicate_to_other_feed: null;
  syndicate_to_section_id: null;
  hide_from_feed: boolean;
  free_podcast_url: null;
  free_podcast_duration: null;
}

export interface PublishedByline {
  id: number;
  name: string;
  handle: string;
  previous_name: null;
  photo_url: string;
  bio: null;
  profile_set_up_at: Date;
  publicationUsers: PublicationUser[];
  is_guest: boolean;
  bestseller_tier: number;
}

export interface PublicationUser {
  id: number;
  user_id: number;
  publication_id: number;
  role: "admin";
  public: boolean;
  is_primary: boolean;
  publication: Publication;
}

export interface Publication {
  id: number;
  name: string;
  subdomain: string;
  custom_domain: null;
  custom_domain_optional: boolean;
  hero_text: string;
  logo_url: string;
  author_id: number;
  theme_var_background_pop: string;
  created_at: Date;
  rss_website_url: null;
  email_from_name: string;
  copyright: string;
  founding_plan_name: "Founding Member";
  community_enabled: boolean;
  invite_only: boolean;
  payments_state: "enabled";
  language: null;
  explicit: boolean;
  is_personal_mode: boolean;
}

export interface Pub {
  apple_pay_disabled: boolean;
  apex_domain: null;
  author_id: number;
  byline_images_enabled: boolean;
  bylines_enabled: boolean;
  chartable_token: null;
  community_enabled: boolean;
  copyright: string;
  cover_photo_url: string;
  created_at: Date;
  custom_domain_optional: boolean;
  custom_domain: null;
  custom_publication_theme_id: null;
  default_comment_sort: "best_first";
  default_coupon: null;
  default_group_coupon: null;
  default_show_guest_bios: boolean;
  email_banner_url: null;
  email_from_name: string;
  email_from: null;
  embed_tracking_disabled: boolean;
  explicit: boolean;
  expose_paywall_content_to_search_engines: boolean;
  fb_pixel_id: null;
  fb_site_verification_token: null;
  flagged_as_spam: boolean;
  founding_subscription_benefits: [];
  free_subscription_benefits: string[];
  ga_pixel_id: null;
  google_site_verification_token: null;
  google_tag_manager_token: null;
  hero_image: null;
  hero_text: string;
  hide_intro_subtitle: null;
  hide_intro_title: null;
  hide_podcast_feed_link: boolean;
  homepage_type: "magaziney";
  id: number;
  image_thumbnails_always_enabled: boolean;
  invite_only: boolean;
  language: "en";
  logo_url_wide: null;
  logo_url: string;
  minimum_group_size: number;
  moderation_enabled: boolean;
  name: string;
  paid_subscription_benefits: string[];
  parsely_pixel_id: null;
  payments_state: "enabled";
  paywall_free_trial_enabled: boolean;
  podcast_art_url: null;
  paid_podcast_episode_art_url: null;
  podcast_byline: null;
  podcast_description: null;
  podcast_enabled: boolean;
  podcast_feed_url: null;
  podcast_title: null;
  post_preview_limit: null;
  require_clickthrough: boolean;
  rss_feed_url: null;
  rss_website_url: null;
  show_pub_podcast_tab: boolean;
  show_recs_on_homepage: boolean;
  subdomain: string;
  subscriber_invites: number;
  support_email: null;
  theme_var_background_pop: string;
  theme_var_color_links: boolean;
  theme_var_cover_bg_color: null;
  trial_end_override: null;
  twitter_pixel_id: null;
  type: "newsletter";
  post_reaction_faces_enabled: boolean;
  is_personal_mode: boolean;
  exclude_from_stats: boolean;
  plans: Plan[];
  stripe_user_id: string;
  stripe_country: string;
  stripe_publishable_key: string;
  automatic_tax_enabled: boolean;
  author_name: string;
  author_handle: string;
  author_photo_url: string;
  author_bio: null;
  has_custom_tos: boolean;
  has_custom_privacy: boolean;
  theme: Theme;
  threads_v2_settings: null;
  default_group_coupon_percent_off: null;
  pause_return_date: null;
  has_posts: boolean;
  has_recommendations: boolean;
  first_post_date: Date;
  has_podcast: boolean;
  has_free_podcast: boolean;
  has_subscriber_only_podcast: boolean;
  has_community_content: boolean;
  twitter_share_on_publish_opt_in: null;
  twitter_permissions: Audience;
  rankingDetail: string;
  rankingDetailFreeIncluded: string;
  rankingDetailOrderOfMagnitude: number;
  rankingDetailFreeIncludedOrderOfMagnitude: number;
  rankingDetailFreeSubscriberCount: string;
  rankingDetailByLanguage: RankingDetailByLanguage;
  freeSubscriberCount: string;
  freeSubscriberCountOrderOfMagnitude: string;
  author_bestseller_tier: number;
  disable_monthly_subscriptions: boolean;
  disable_annual_subscriptions: boolean;
  hide_post_restacks: boolean;
  notes_feed_enabled: boolean;
  paywall_chat: "free";
  sections: [];
  multipub_migration: null;
  navigationBarItems: [];
  contributors: Contributor[];
  threads_v2_enabled: boolean;
  viralGiftsConfig: ViralGiftsConfig;
  tier: number;
  no_follow: boolean;
  no_index: boolean;
  can_set_google_site_verification: boolean;
  can_have_sitemap: boolean;
  founding_plan_name_english: "Founding Member";
  draft_plans: Plan[];
  base_url: string;
  hostname: string;
  is_on_substack: boolean;
  spotify_podcast_settings: null;
  podcastPalette: PodcastPalette;
  pageThemes: PageThemes;
  multiple_pins: boolean;
  live_subscriber_counts: boolean;
  subscribeCardVersionHash: string;
}

export interface Contributor {
  name: string;
  handle: string;
  role: "admin";
  owner: boolean;
  user_id: number;
  photo_url: string;
  bio: null;
}

export interface Plan {
  id: PlanID;
  object?: "plan";
  active: boolean;
  aggregate_usage?: null;
  amount: number;
  amount_decimal?: string;
  billing_scheme?: "per_unit";
  created?: number;
  currency: string;
  interval: Interval;
  interval_count: number;
  livemode?: boolean;
  metadata: Metadata;
  meter?: null;
  nickname: string;
  product?: string;
  tiers?: null;
  tiers_mode?: null;
  transform_usage?: null;
  trial_period_days?: null;
  usage_type?: "licensed";
  currency_options: { [key: string]: CurrencyOption };
  name?: PlanID;
}

export interface CurrencyOption {
  custom_unit_amount?: null;
  tax_behavior: "unspecified";
  unit_amount: number;
  unit_amount_decimal?: string;
}

export type PlanID = string;

export type Interval = "year" | "month";

export interface Metadata {
  substack: "yes";
  founding?: "yes";
  no_coupons?: "yes";
  short_description?: "Founding Member";
  short_description_english?: "Founding Member";
  minimum?: string;
  minimum_local?: { [key: string]: number };
}

export interface PageThemes {
  podcast: null;
}

export interface PodcastPalette {
  Vibrant: DarkMuted;
  DarkVibrant: DarkMuted;
  LightVibrant: DarkMuted;
  Muted: DarkMuted;
  DarkMuted: DarkMuted;
  LightMuted: DarkMuted;
}

export interface DarkMuted {
  rgb: number[];
  population: number;
}

export interface RankingDetailByLanguage {
  [key: string]: RankingDetail;
}

export interface RankingDetail {
  rankingDetail: string;
  rankingDetailFreeIncluded: string;
  rankingDetailOrderOfMagnitude: number;
  rankingDetailFreeIncludedOrderOfMagnitude: number;
  rankingDetailFreeSubscriberCount: string;
  freeSubscriberCount: string;
  freeSubscriberCountOrderOfMagnitude: string;
}

export interface Theme {
  background_pop_color: null;
  web_bg_color: string;
  cover_bg_color: null;
  publication_id: number;
  color_links: null;
  font_preset_heading: null;
  font_preset_body: null;
  font_family_headings: null;
  font_family_body: null;
  font_family_ui: null;
  font_size_body_desktop: null;
  print_secondary: null;
  custom_css_web: null;
  custom_css_email: null;
  home_hero: "magaziney";
  home_posts: "list";
  home_show_top_posts: boolean;
  hide_images_from_list: boolean;
  home_hero_alignment: "left";
  home_hero_show_podcast_links: boolean;
}

export interface ViralGiftsConfig {
  id: string;
  publication_id: number;
  enabled: boolean;
  gifts_per_user: number;
  gift_length_months: number;
  send_extra_gifts: boolean;
  message: string;
  created_at: Date;
  updated_at: Date;
  days_til_invite: number;
  send_emails: boolean;
  show_link: null;
  grant_email_body: null;
  grant_email_subject: null;
}

export interface PublicationSettings {
  block_ai_crawlers: boolean;
  credit_token_enabled: boolean;
  custom_tos_and_privacy: boolean;
  did_identity: null;
  disable_optimistic_bank_payments: boolean;
  display_welcome_page_details: boolean;
  enable_meetings: boolean;
  payment_pledges_enabled: boolean;
  enable_post_page_conversion: boolean;
  enable_prev_next_nav: boolean;
  enable_restacking: boolean;
  google_analytics_4_token: null;
  group_sections_and_podcasts_in_menu_enabled: boolean;
  medium_length_description: string;
  notes_feed_enabled: boolean;
  paywall_unlock_tokens: boolean;
  post_preview_crop_gravity: "center";
  reader_referrals_enabled: boolean;
  reader_referrals_leaderboard_enabled: boolean;
  seen_coming_soon_explainer: boolean;
  seen_google_analytics_migration_modal: boolean;
  local_currency_modal_seen: boolean;
  local_payment_methods_modal_seen: boolean;
  twitter_pixel_signup_event_id: null;
  twitter_pixel_subscribe_event_id: null;
  use_local_currency: boolean;
  use_local_payment_methods: boolean;
  welcome_page_opt_out_text: string;
  cookie_settings: string;
}

export interface SiteConfigs {
  score_upsell_email: "control";
  first_chat_email_enabled: boolean;
  notes_video_max_duration_minutes: number;
  "reader-onboarding-promoted-pub": number;
  pub_creation_captcha_behavior: "risky_pubs";
  new_commenter_approval: boolean;
  pub_update_opennode_api_key: boolean;
  add_list_unsubscribe_post_header: boolean;
  embedding_search_using_quantized_field: boolean;
  zendesk_automation_cancellations: boolean;
  hide_book_a_meeting_button: boolean;
  first_month_upsell_enabled: boolean;
  app_mode_subscribe_flow_free: boolean;
  publication_max_bylines: number;
  no_contest_charge_disputes: boolean;
  new_subscription_management: boolean;
  comp_expiry_email_new_copy: "NONE";
  free_unlock_required: boolean;
  traffic_rule_check_enabled: boolean;
  amp_emails_enabled: boolean;
  enable_post_summarization: boolean;
  image_deep_link_enabled: boolean;
  bitcoin_enabled: boolean;
  public_podcast_rss_feed_only_free_visible: boolean;
  show_entire_square_image: boolean;
  hide_subscriber_count: boolean;
  ios_global_search_enabled: boolean;
  publication_author_display_override: string;
  enable_android_recs_v2: boolean;
  generate_pdf_tax_report: boolean;
  show_generic_post_importer: boolean;
  enable_pledges_modal: boolean;
  include_pdf_invoice: boolean;
  hide_pub_from_subscription_recommendation: boolean;
  platform_searcher_enabled: boolean;
  new_reading_queue: boolean;
  use_featured_pub_recommendations: boolean;
  meetings_v1: boolean;
  custom_target_origin: string;
  exempt_from_gtm_filter: boolean;
  group_sections_and_podcasts_in_menu: boolean;
  boost_optin_modal_enabled: boolean;
  trending_topics_live_mode: boolean;
  post_blogspot_importer: boolean;
  paywall_chat: boolean;
  pub_tts_override: "default";
  disable_monthly_subscriptions: boolean;
  skip_welcome_email: boolean;
  chat_reader_thread_notification_default: boolean;
  scheduled_pinned_posts: boolean;
  disable_redirect_outbound_utm_params: boolean;
  reader_gift_referrals_enabled: boolean;
  enable_bestseller_survey_modal: boolean;
  dont_show_guest_byline: boolean;
  like_comments_enabled: boolean;
  extended_podcast_episode_metadata: boolean;
  use_richer_html_for_editing_podcast_description: boolean;
  share_query_parameter_clip_links: boolean;
  enable_author_note_email_toggle: boolean;
  meetings_embed_publication_name: boolean;
  no_auto_renewal_notice: boolean;
  people_you_may_know_algorithm: "experiment";
  welcome_screen_blurb_override: string;
  post_recipients_batch_limit: number;
  like_posts_enabled: boolean;
  notes_publication_mentions_enabled: boolean;
  twitter_player_card_enabled: boolean;
  feed_promoted_user: boolean;
  allow_renew_email_footer: boolean;
  enable_android_chat_paywall: boolean;
  section_specific_csv_imports_enabled: boolean;
  improved_tts_voiceover: boolean;
  bypass_profile_substack_logo_detection: boolean;
  use_preloaded_player_sources: boolean;
  generate_twitter_card_with_lamda: boolean;
  list_pruning_enabled: boolean;
  facebook_connect: boolean;
  opt_in_to_sections_during_subscribe: boolean;
  underlined_colored_links: boolean;
  stripe_link_in_payment_element: "experiment";
  max_image_upload_mb: number;
  modal_rec_variant_user: "control";
  extract_stripe_receipt_url: boolean;
  live_stream_notifications_disbled: boolean;
  enable_android_dms_writer_beta: boolean;
  enable_chat_inbox_pins: boolean;
  threads_suggested_ios_version: null;
  pledges_disabled: boolean;
  threads_minimum_ios_version: number;
  hide_podcast_email_setup_link: boolean;
  subscribe_captcha_behavior: "default";
  publication_ban_sample_rate: number;
  allow_moderation_sampling_mode: boolean;
  mobile_media_tab: boolean;
  gift_post_unlocks_recipient: "experiment";
  reader_referrals_feature_enabled: boolean;
  continue_support_cta_in_newsletter_emails: boolean;
  bloomberg_syndication_enabled: boolean;
  custom_publication_theme: boolean;
  lists_enabled: boolean;
  show_writer_referral_box: boolean;
  generated_database_maintenance_mode: boolean;
  allow_document_freeze: boolean;
  podcast_main_feed_is_firehose: boolean;
  no_embed_redirect: boolean;
  enable_text_tracks_creation: boolean;
  translate_mobile_app: boolean;
  spotify_open_access_sandbox_mode: boolean;
  enable_seen_inbox: boolean;
  fullstory_enabled: boolean;
  chat_reply_poll_interval: number;
  mobile_feed_tabs: boolean;
  enable_reader_marketing_page: boolean;
  force_pub_links_to_use_subdomain: boolean;
  email_existing_users_on_import: boolean;
  always_show_cookie_banner: boolean;
  hide_media_download_option: boolean;
  use_stripe_link: "control";
  twitter_figures_enabled: boolean;
  hide_post_restacks: boolean;
  feed_item_source_debug_mode: boolean;
  global_search_bestseller_tier: "NONE";
  enable_ai_generated_clips: boolean;
  daily_promoted_notes_enabled: boolean;
  publication_homepage_title_display_override: string;
  pub_banned_word_list: string;
  post_preview_highlight_byline: boolean;
  bypass_unlock_token_limit: boolean;
  notifications_disabled: string;
  cross_post_notification_threshold: number;
  facebook_connect_prod_app: boolean;
  gift_referrals_allow_reups: boolean;
  messages_inbox_page_size: number;
  minimum_android_version: number;
  feed_main_disabled: boolean;
  use_mobile_app_post_unlock_flow: boolean;
  use_og_image_as_twitter_image_for_post_previews: boolean;
  cookie_preference_middleware_enabled: boolean;
  live_streams_enabled: boolean;
  seo_tier_override: "NONE";
  cancellation_flow_experiment: "experiment";
  publisher_api_enabled: boolean;
  zendesk_support_priority: "default";
  enable_subscriber_referrals_awards: boolean;
  homepage_overlap_ufi: boolean;
  photo_dna_enabled: boolean;
  android_live_stream_creation_enabled: boolean;
  mobile_subscription_app_takeover_screen_v2: "control";
  post_management_search_engine: "elasticsearch";
  onboarding_retention_shuffle: "experiment";
  web_reader_podcasts_tab: boolean;
  live_stream_creation_enabled: boolean;
  embeds_enabled: boolean;
  enable_web_typing_indicators: boolean;
  app_install_drawer_2: "experiment";
  web_vitals_sample_rate: number;
  skip_twitter_step_in_writer_onboarding: boolean;
  android_suggestion_categories_onboarding_tabs: boolean;
  mobile_post_editor_enabled: boolean;
  enabled_category_tab_ids: string;
  section_specific_welcome_pages: boolean;
  local_payment_methods: "control";
  enable_android_chat_founding_tier: boolean;
  posts_in_rss_feed: number;
  post_rec_endpoint: string;
  publisher_dashboard_section_selector: boolean;
  reader_surveys_platform_question_order: string;
  show_email_cutoff_cta: "experiment";
  modal_rec_variant_content: "control";
  monthly_sub_is_one_off: boolean;
  unread_notes_activity_digest: "control";
  display_cookie_settings: boolean;
  login_guard_app_link_in_email: boolean;
  welcome_page_query_params: boolean;
  enable_free_podcast_urls: boolean;
  phone_verification_banned_countries: string;
  use_microlink_for_instagram_embeds: boolean;
  blocked_email_domains: string;
  use_whisper: boolean;
  enable_personal_substack_presentation: boolean;
  ios_post_stats_for_admins: boolean;
  section_specific_preambles: boolean;
  enable_android_chat_realtime: boolean;
  show_menu_on_posts: boolean;
  app_upsell_follow_prompt: "control";
  free_signup_confirmation_behavior: "with_email_validation";
  show_note_preview_small_og_image: boolean;
  ios_writer_stats_public_launch_v2: boolean;
  phone_verification_fallback_to_twilio: boolean;
  enable_android_post_stats: boolean;
  ios_chat_revamp_enabled: boolean;
  onboarding_pymk: "experiment";
  sql_feed_fallback_percent: number;
  enable_android_chat_navigation: boolean;
  show_phone_banner: boolean;
  publisher_banner: string;
  chat_founding_tier: boolean;
  enable_decagon_chat: boolean;
  first_month_upsell: "control";
  twitter_connect_flows_enabled: boolean;
  android_google_sign_in: boolean;
  enable_user_contacts: boolean;
  enable_android_dms_realtime: boolean;
  enable_upload_seperate_audio: boolean;
  welcome_page_update_desktop_visuals_limited: "experiment";
  app_mode: boolean;
  rss_verification_code: string;
  notification_post_emails: "experiment";
  export_hooks_enabled: boolean;
  audio_encoding_bitrate: null;
  bestseller_pub_override: boolean;
  extra_seats_coupon_type: boolean;
  post_subdomain_universal_links: boolean;
  post_import_max_file_size: number;
  show_email_cutoff_cta_top: "control";
  minimum_ios_version: number;
  disable_annual_subscriptions: boolean;
  enable_bestseller_survey_modal_override: boolean;
  android_live_streams_enabled: boolean;
  enable_android_dms: boolean;
  non_mfa_password_login_guard: "block_suspicious";
  use_substrate_sdxl: boolean;
  main_aurora_reads_percent: number;
  enable_crm_publisher_agreement_agree_wall: Audience;
  recipes_enabled: boolean;
  disable_deletion: boolean;
  default_smart_delivery_on: "experiment";
  enable_android_post_stats_authors_only: boolean;
  sort_inbox_with_pins: boolean;
  live_event_mixin: string;
  review_incoming_email: "default";
  unitary_image_moderation_percent: number;
  feed_pushes_for_all: "control";
  ios_chat_uikit: boolean;
  daily_promoted_note_intelligent_delivery: "control";
  clip_focused_video_upload_flow: boolean;
  pin_primary_publication_chat_web: "experiment";
  infer_categories_for_new_users: boolean;
  pin_primary_publication_chat_ios: "control";
  post_podcast_import_batch_size: number;
  enable_notes_search: boolean;
  load_test_unichat: boolean;
}

export interface ThemeVariables {
  color_theme_bg_pop: string;
  background_pop: string;
  color_theme_bg_web: null;
  cover_bg_color: string;
  background_pop_darken: string;
  print_on_pop: string;
  color_theme_bg_pop_darken: string;
  color_theme_print_on_pop: string;
  border_subtle: string;
  background_subtle: string;
  print_pop: string;
  color_theme_accent: string;
  cover_print_primary: string;
  cover_print_secondary: string;
  cover_print_tertiary: string;
  cover_border_color: string;
  home_hero: "magaziney";
  home_posts: "list";
  web_bg_color: string;
  background_contrast_1: string;
  color_theme_bg_contrast_1: string;
  background_contrast_2: string;
  color_theme_bg_contrast_2: string;
  background_contrast_3: string;
  color_theme_bg_contrast_3: string;
  background_contrast_4: string;
  color_theme_bg_contrast_4: string;
  background_contrast_5: string;
  color_theme_bg_contrast_5: string;
  color_theme_detail: string;
  background_contrast_pop: string;
  color_theme_bg_contrast_pop: string;
  input_background: string;
  cover_input_background: string;
  tooltip_background: string;
  web_bg_color_h: string;
  web_bg_color_s: string;
  web_bg_color_l: string;
  print_on_web_bg_color: string;
  print_secondary_on_web_bg_color: string;
  selected_comment_background_color: string;
  background_pop_rgb: string;
  background_pop_rgb_pc: string;
  color_theme_bg_pop_rgb: string;
  color_theme_bg_pop_rgb_pc: string;
  color_theme_accent_rgb: string;
  color_theme_accent_rgb_pc: string;
}

export interface User {
  id: number;
  name: null;
  created_at: Date;
  dashboard_pubs: [];
  email: string;
  email_confirmed: boolean;
  photo_url: null;
  bio: null;
  subscription_expiry: Date;
  subscription_first_payment_at: Date;
  subscription_type: null;
  subscription_id: number;
  subscription_publication_id: number;
  subscription_unsubscribed_at: null;
  subscription_visibility: "public";
  stripe_subscription_id: string;
  stripe_platform_customer_id: string;
  anonymous_id: string;
  subdomain: null;
  publisher_agreement_accepted_at: null;
  tos_accepted_at: null;
  has_passed_captcha: null;
  profile_set_up_at: null;
  is_contributor: boolean;
  is_admin: boolean;
  is_public_admin: boolean;
  is_ghost: boolean;
  has_publication: boolean;
  has_linked_twitter: boolean;
  has_linked_facebook: boolean;
  has_linked_contacts: boolean;
  post_notification_preference: null;
  reader_installed_at: null;
  has_mfa_enabled: boolean;
  has_security_questions_enabled: boolean;
  activity_items_viewed_at: null;
  dismissed_ios_app_promo_at: null;
  comp_expired_recently: null;
  activity_likes_enabled: boolean;
  has_seen_like_nux: boolean;
  is_pledged: boolean;
  release_group: null;
  handle: null;
  phone: null;
  has_redeemed_post_unlock_token: boolean;
  has_saved_payment: boolean;
  is_free_subscribed: boolean;
  is_subscribed: boolean;
  is_founding: boolean;
  is_paused: boolean;
  email_disabled: boolean;
  digest_enabled: boolean;
  has_pw: boolean;
}

export interface UserSettings {
  user_id: number | null;
  activity_likes_enabled: boolean;
  hasDismissedSectionToNewsletterRename: boolean;
  is_guest_post_enabled: boolean;
  feed_web_nux_seen_at: null;
  has_seen_select_to_restack_tooltip_nux: boolean;
  invite_friends_nux_dismissed_at: null;
  suggestions_feed_item_last_shown_at: null;
  has_seen_select_to_restack_modal: boolean;
  last_home_tab: "inbox" | null;
  last_notification_alert_shown_at: null;
  disable_reply_hiding: boolean;
  newest_seen_chat_item_published_at: null;
  explicitContentEnabled: boolean;
  contactMatchingEnabled: boolean;
  messageRequestLevel: Audience;
  creditTokensTreatmentExposed: boolean;
  appBadgeIncludesChat: boolean;
  autoPlayVideo: boolean;
  smart_delivery_enabled: boolean;
  chatbotTermsLastAcceptedAt: null;
}
