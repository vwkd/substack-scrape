/**
 * Generated with https://app.quicktype.io/
 */

export interface Entry {
  id: number;
  editor_v2: boolean;
  publication_id: number;
  title: string;
  social_title: null;
  search_engine_title: null;
  search_engine_description: null;
  type: "newsletter";
  slug: string;
  post_date: Date;
  audience: Audience;
  podcast_duration: null;
  video_upload_id: null;
  podcast_upload_id: null;
  write_comment_permissions: Audience;
  should_send_free_preview: boolean;
  free_unlock_required: boolean;
  default_comment_sort: null | string;
  canonical_url: string;
  section_id: null;
  top_exclusions: [];
  pins: [];
  is_section_pinned: boolean;
  section_slug: null;
  section_name: null;
  reactions: Reactions;
  restacked_post_id: null;
  restacked_pub_name: null;
  restacked_pub_logo_url: null;
  subtitle: string;
  cover_image: null | string;
  cover_image_is_square: boolean;
  cover_image_is_explicit: boolean;
  podcast_url: null | string;
  videoUpload: null;
  podcastFields: PodcastFields | null;
  podcast_preview_upload_id: null;
  podcastUpload: null;
  podcastPreviewUpload: null;
  voiceover_upload_id: null;
  voiceoverUpload: null;
  has_voiceover: boolean;
  description: string;
  body_json: null;
  body_html: null;
  longer_truncated_body_json: null;
  longer_truncated_body_html: null;
  truncated_body_text: string;
  wordcount: number;
  postTags: [];
  teaser_post_eligible: boolean;
  postCountryBlocks: [];
  publishedBylines: PublishedByline[];
  reaction: boolean | null;
  reaction_count: number;
  comment_count: number;
  child_comment_count: number;
  audio_items: AudioItem[];
  is_geoblocked: boolean;
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
  hidden?: boolean;
}

export type Audience = "only_paid" | "everyone" | "none";

export interface AudioItem {
  post_id: number;
  voice_id: "en-US-JennyNeural";
  audio_url: null | string;
  type: "tts";
  status: "completed" | "paywalled";
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

export interface Reactions {
  "❤": number;
}

export function isPaid(entry: Entry): boolean {
  return !("hidden" in entry);
}
