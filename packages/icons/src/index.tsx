/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, BoxProps } from '@air/zephyr';

import _AddMember from './svgs/uncategorized/AddMember.svg';
import _Air from './svgs/uncategorized/Air.svg';
import _At from './svgs/uncategorized/At.svg';
import _Audio from './svgs/uncategorized/Audio.svg';
import _Bell from './svgs/uncategorized/Bell.svg';
import _BoardsAll from './svgs/uncategorized/Boards-All.svg';
import _BoardsGrid from './svgs/uncategorized/Boards-Grid.svg';
import _BoardsList from './svgs/uncategorized/Boards-List.svg';
import _Boards from './svgs/uncategorized/Boards.svg';
import _Bookmark from './svgs/uncategorized/Bookmark.svg';
import _CameraFilled from './svgs/uncategorized/Camera-Filled.svg';
import _Camera from './svgs/uncategorized/Camera.svg';
import _Caution from './svgs/uncategorized/Caution.svg';
import _Check from './svgs/uncategorized/Check.svg';
import _ChevronDown from './svgs/uncategorized/Chevron-Down.svg';
import _ChevronLeft from './svgs/uncategorized/Chevron-Left.svg';
import _ChevronRight from './svgs/uncategorized/Chevron-Right.svg';
import _ChevronUp from './svgs/uncategorized/Chevron-Up.svg';
import _CircledMinus from './svgs/uncategorized/Circled-Minus.svg';
import _CircledPlus from './svgs/uncategorized/Circled-Plus.svg';
import _Clips from './svgs/uncategorized/Clips.svg';
import _Clock from './svgs/uncategorized/Clock.svg';
import _Close from './svgs/uncategorized/Close.svg';
import _CloudOffline from './svgs/uncategorized/Cloud-Offline.svg';
import _CloudUpload from './svgs/uncategorized/Cloud-Upload.svg';
import _Comment from './svgs/uncategorized/Comment.svg';
import _CompressedFiles from './svgs/uncategorized/CompressedFiles.svg';
import _DashedPlus from './svgs/uncategorized/DashedPlus.svg';
import _Database from './svgs/uncategorized/Database.svg';
import _Delete from './svgs/uncategorized/Delete.svg';
import _Devices from './svgs/uncategorized/Devices.svg';
import _Document from './svgs/uncategorized/Document.svg';
import _DoubleChevronDown from './svgs/uncategorized/DoubleChevron-Down.svg';
import _DoubleChevronLeft from './svgs/uncategorized/DoubleChevron-Left.svg';
import _DoubleChevronRight from './svgs/uncategorized/DoubleChevron-Right.svg';
import _DoubleChevronUp from './svgs/uncategorized/DoubleChevron-Up.svg';
import _Download from './svgs/uncategorized/Download.svg';
import _Downtick from './svgs/uncategorized/Downtick.svg';
import _Dropbox from './svgs/uncategorized/Dropbox.svg';
import _Edit from './svgs/uncategorized/Edit.svg';
import _Ellipsis from './svgs/uncategorized/Ellipsis.svg';
import _Email from './svgs/uncategorized/Email.svg';
import _EyeClosed from './svgs/uncategorized/Eye-Closed.svg';
import _Eye from './svgs/uncategorized/Eye.svg';
import _Facebook from './svgs/uncategorized/Facebook.svg';
import _Filters from './svgs/uncategorized/Filters.svg';
import _Flash from './svgs/uncategorized/Flash.svg';
import _FolderOpen from './svgs/uncategorized/Folder-Open.svg';
import _Folder from './svgs/uncategorized/Folder.svg';
import _FullScreenEnter from './svgs/uncategorized/FullScreen-Enter.svg';
import _FullScreenExit from './svgs/uncategorized/FullScreen-Exit.svg';
import _Gear from './svgs/uncategorized/Gear.svg';
import _Github from './svgs/uncategorized/Github.svg';
import _GoogleDrive from './svgs/uncategorized/GoogleDrive.svg';
import _Hamburger from './svgs/uncategorized/Hamburger.svg';
import _Help from './svgs/uncategorized/Help.svg';
import _Hide from './svgs/uncategorized/Hide.svg';
import _Home from './svgs/uncategorized/Home.svg';
import _Images from './svgs/uncategorized/Images.svg';
import _Import from './svgs/uncategorized/Import.svg';
import _Info from './svgs/uncategorized/Info.svg';
import _Instagram from './svgs/uncategorized/Instagram.svg';
import _Library from './svgs/uncategorized/Library.svg';
import _LineGraph from './svgs/uncategorized/LineGraph.svg';
import _Link from './svgs/uncategorized/Link.svg';
import _LinkedIn from './svgs/uncategorized/LinkedIn.svg';
import _LogOut from './svgs/uncategorized/LogOut.svg';
import _MagicWand from './svgs/uncategorized/MagicWand.svg';
import _Maximize from './svgs/uncategorized/Maximize.svg';
import _Medium from './svgs/uncategorized/Medium.svg';
import _Minimize from './svgs/uncategorized/Minimize.svg';
import _Move from './svgs/uncategorized/Move.svg';
import _Notion from './svgs/uncategorized/Notion.svg';
import _Pdf from './svgs/uncategorized/PDF.svg';
import _Padlock from './svgs/uncategorized/Padlock.svg';
import _Pause from './svgs/uncategorized/Pause.svg';
import _Photos from './svgs/uncategorized/Photos.svg';
import _Play from './svgs/uncategorized/Play.svg';
import _PlayPause from './svgs/uncategorized/PlayPause.svg';
import _Plus from './svgs/uncategorized/Plus.svg';
import _Presentations from './svgs/uncategorized/Presentations.svg';
import _Radar from './svgs/uncategorized/Radar.svg';
import _Refresh from './svgs/uncategorized/Refresh.svg';
import _Remove from './svgs/uncategorized/Remove.svg';
import _RightArrow from './svgs/uncategorized/RightArrow.svg';
import _Save from './svgs/uncategorized/Save.svg';
import _Search from './svgs/uncategorized/Search.svg';
import _Selects from './svgs/uncategorized/Selects.svg';
import _SendFilled from './svgs/uncategorized/Send-Filled.svg';
import _Send from './svgs/uncategorized/Send.svg';
import _Share from './svgs/uncategorized/Share.svg';
import _Show from './svgs/uncategorized/Show.svg';
import _Skip from './svgs/uncategorized/Skip.svg';
import _SortAscending from './svgs/uncategorized/Sort-Ascending.svg';
import _SortDescending from './svgs/uncategorized/Sort-Descending.svg';
import _Star from './svgs/uncategorized/Star.svg';
import _Swap from './svgs/uncategorized/Swap.svg';
import _Tag from './svgs/uncategorized/Tag.svg';
import _Team from './svgs/uncategorized/Team.svg';
import _TextFiles from './svgs/uncategorized/TextFiles.svg';
import _ThreeD from './svgs/uncategorized/ThreeD.svg';
import _ToggleGrid from './svgs/uncategorized/Toggle-Grid.svg';
import _ToggleList from './svgs/uncategorized/Toggle-List.svg';
import _TriangleDown from './svgs/uncategorized/Triangle-Down.svg';
import _TriangleLeft from './svgs/uncategorized/Triangle-Left.svg';
import _TriangleRight from './svgs/uncategorized/Triangle-Right.svg';
import _TriangleUp from './svgs/uncategorized/Triangle-Up.svg';
import _Twitter from './svgs/uncategorized/Twitter.svg';
import _Uploads from './svgs/uncategorized/Uploads.svg';
import _User from './svgs/uncategorized/User.svg';
import _Vector from './svgs/uncategorized/Vector.svg';
import _Video from './svgs/uncategorized/Video.svg';
import _VolumeHigh from './svgs/uncategorized/Volume-High.svg';
import _VolumeLow from './svgs/uncategorized/Volume-Low.svg';
import _VolumeMuted from './svgs/uncategorized/Volume-Muted.svg';

const AddMember = (props?: BoxProps<SVGElement>) => <Box as={_AddMember} {...props} />;
const Air = (props?: BoxProps<SVGElement>) => <Box as={_Air} {...props} />;
const At = (props?: BoxProps<SVGElement>) => <Box as={_At} {...props} />;
const Audio = (props?: BoxProps<SVGElement>) => <Box as={_Audio} {...props} />;
const Bell = (props?: BoxProps<SVGElement>) => <Box as={_Bell} {...props} />;
const BoardsAll = (props?: BoxProps<SVGElement>) => <Box as={_BoardsAll} {...props} />;
const BoardsGrid = (props?: BoxProps<SVGElement>) => <Box as={_BoardsGrid} {...props} />;
const BoardsList = (props?: BoxProps<SVGElement>) => <Box as={_BoardsList} {...props} />;
const Boards = (props?: BoxProps<SVGElement>) => <Box as={_Boards} {...props} />;
const Bookmark = (props?: BoxProps<SVGElement>) => <Box as={_Bookmark} {...props} />;
const CameraFilled = (props?: BoxProps<SVGElement>) => <Box as={_CameraFilled} {...props} />;
const Camera = (props?: BoxProps<SVGElement>) => <Box as={_Camera} {...props} />;
const Caution = (props?: BoxProps<SVGElement>) => <Box as={_Caution} {...props} />;
const Check = (props?: BoxProps<SVGElement>) => <Box as={_Check} {...props} />;
const ChevronDown = (props?: BoxProps<SVGElement>) => <Box as={_ChevronDown} {...props} />;
const ChevronLeft = (props?: BoxProps<SVGElement>) => <Box as={_ChevronLeft} {...props} />;
const ChevronRight = (props?: BoxProps<SVGElement>) => <Box as={_ChevronRight} {...props} />;
const ChevronUp = (props?: BoxProps<SVGElement>) => <Box as={_ChevronUp} {...props} />;
const CircledMinus = (props?: BoxProps<SVGElement>) => <Box as={_CircledMinus} {...props} />;
const CircledPlus = (props?: BoxProps<SVGElement>) => <Box as={_CircledPlus} {...props} />;
const Clips = (props?: BoxProps<SVGElement>) => <Box as={_Clips} {...props} />;
const Clock = (props?: BoxProps<SVGElement>) => <Box as={_Clock} {...props} />;
const Close = (props?: BoxProps<SVGElement>) => <Box as={_Close} {...props} />;
const CloudOffline = (props?: BoxProps<SVGElement>) => <Box as={_CloudOffline} {...props} />;
const CloudUpload = (props?: BoxProps<SVGElement>) => <Box as={_CloudUpload} {...props} />;
const Comment = (props?: BoxProps<SVGElement>) => <Box as={_Comment} {...props} />;
const CompressedFiles = (props?: BoxProps<SVGElement>) => <Box as={_CompressedFiles} {...props} />;
const DashedPlus = (props?: BoxProps<SVGElement>) => <Box as={_DashedPlus} {...props} />;
const Database = (props?: BoxProps<SVGElement>) => <Box as={_Database} {...props} />;
const Delete = (props?: BoxProps<SVGElement>) => <Box as={_Delete} {...props} />;
const Devices = (props?: BoxProps<SVGElement>) => <Box as={_Devices} {...props} />;
const Document = (props?: BoxProps<SVGElement>) => <Box as={_Document} {...props} />;
const DoubleChevronDown = (props?: BoxProps<SVGElement>) => <Box as={_DoubleChevronDown} {...props} />;
const DoubleChevronLeft = (props?: BoxProps<SVGElement>) => <Box as={_DoubleChevronLeft} {...props} />;
const DoubleChevronRight = (props?: BoxProps<SVGElement>) => <Box as={_DoubleChevronRight} {...props} />;
const DoubleChevronUp = (props?: BoxProps<SVGElement>) => <Box as={_DoubleChevronUp} {...props} />;
const Download = (props?: BoxProps<SVGElement>) => <Box as={_Download} {...props} />;
const Downtick = (props?: BoxProps<SVGElement>) => <Box as={_Downtick} {...props} />;
const Dropbox = (props?: BoxProps<SVGElement>) => <Box as={_Dropbox} {...props} />;
const Edit = (props?: BoxProps<SVGElement>) => <Box as={_Edit} {...props} />;
const Ellipsis = (props?: BoxProps<SVGElement>) => <Box as={_Ellipsis} {...props} />;
const Email = (props?: BoxProps<SVGElement>) => <Box as={_Email} {...props} />;
const EyeClosed = (props?: BoxProps<SVGElement>) => <Box as={_EyeClosed} {...props} />;
const Eye = (props?: BoxProps<SVGElement>) => <Box as={_Eye} {...props} />;
const Facebook = (props?: BoxProps<SVGElement>) => <Box as={_Facebook} {...props} />;
const Filters = (props?: BoxProps<SVGElement>) => <Box as={_Filters} {...props} />;
const Flash = (props?: BoxProps<SVGElement>) => <Box as={_Flash} {...props} />;
const FolderOpen = (props?: BoxProps<SVGElement>) => <Box as={_FolderOpen} {...props} />;
const Folder = (props?: BoxProps<SVGElement>) => <Box as={_Folder} {...props} />;
const FullScreenEnter = (props?: BoxProps<SVGElement>) => <Box as={_FullScreenEnter} {...props} />;
const FullScreenExit = (props?: BoxProps<SVGElement>) => <Box as={_FullScreenExit} {...props} />;
const Gear = (props?: BoxProps<SVGElement>) => <Box as={_Gear} {...props} />;
const Github = (props?: BoxProps<SVGElement>) => <Box as={_Github} {...props} />;
const GoogleDrive = (props?: BoxProps<SVGElement>) => <Box as={_GoogleDrive} {...props} />;
const Hamburger = (props?: BoxProps<SVGElement>) => <Box as={_Hamburger} {...props} />;
const Help = (props?: BoxProps<SVGElement>) => <Box as={_Help} {...props} />;
const Hide = (props?: BoxProps<SVGElement>) => <Box as={_Hide} {...props} />;
const Home = (props?: BoxProps<SVGElement>) => <Box as={_Home} {...props} />;
const Images = (props?: BoxProps<SVGElement>) => <Box as={_Images} {...props} />;
const Import = (props?: BoxProps<SVGElement>) => <Box as={_Import} {...props} />;
const Info = (props?: BoxProps<SVGElement>) => <Box as={_Info} {...props} />;
const Instagram = (props?: BoxProps<SVGElement>) => <Box as={_Instagram} {...props} />;
const Library = (props?: BoxProps<SVGElement>) => <Box as={_Library} {...props} />;
const LineGraph = (props?: BoxProps<SVGElement>) => <Box as={_LineGraph} {...props} />;
const Link = (props?: BoxProps<SVGElement>) => <Box as={_Link} {...props} />;
const LinkedIn = (props?: BoxProps<SVGElement>) => <Box as={_LinkedIn} {...props} />;
const LogOut = (props?: BoxProps<SVGElement>) => <Box as={_LogOut} {...props} />;
const MagicWand = (props?: BoxProps<SVGElement>) => <Box as={_MagicWand} {...props} />;
const Maximize = (props?: BoxProps<SVGElement>) => <Box as={_Maximize} {...props} />;
const Medium = (props?: BoxProps<SVGElement>) => <Box as={_Medium} {...props} />;
const Minimize = (props?: BoxProps<SVGElement>) => <Box as={_Minimize} {...props} />;
const Move = (props?: BoxProps<SVGElement>) => <Box as={_Move} {...props} />;
const Notion = (props?: BoxProps<SVGElement>) => <Box as={_Notion} {...props} />;
const Pdf = (props?: BoxProps<SVGElement>) => <Box as={_Pdf} {...props} />;
const Padlock = (props?: BoxProps<SVGElement>) => <Box as={_Padlock} {...props} />;
const Pause = (props?: BoxProps<SVGElement>) => <Box as={_Pause} {...props} />;
const Photos = (props?: BoxProps<SVGElement>) => <Box as={_Photos} {...props} />;
const Play = (props?: BoxProps<SVGElement>) => <Box as={_Play} {...props} />;
const PlayPause = (props?: BoxProps<SVGElement>) => <Box as={_PlayPause} {...props} />;
const Plus = (props?: BoxProps<SVGElement>) => <Box as={_Plus} {...props} />;
const Presentations = (props?: BoxProps<SVGElement>) => <Box as={_Presentations} {...props} />;
const Radar = (props?: BoxProps<SVGElement>) => <Box as={_Radar} {...props} />;
const Refresh = (props?: BoxProps<SVGElement>) => <Box as={_Refresh} {...props} />;
const Remove = (props?: BoxProps<SVGElement>) => <Box as={_Remove} {...props} />;
const RightArrow = (props?: BoxProps<SVGElement>) => <Box as={_RightArrow} {...props} />;
const Save = (props?: BoxProps<SVGElement>) => <Box as={_Save} {...props} />;
const Search = (props?: BoxProps<SVGElement>) => <Box as={_Search} {...props} />;
const Selects = (props?: BoxProps<SVGElement>) => <Box as={_Selects} {...props} />;
const SendFilled = (props?: BoxProps<SVGElement>) => <Box as={_SendFilled} {...props} />;
const Send = (props?: BoxProps<SVGElement>) => <Box as={_Send} {...props} />;
const Share = (props?: BoxProps<SVGElement>) => <Box as={_Share} {...props} />;
const Show = (props?: BoxProps<SVGElement>) => <Box as={_Show} {...props} />;
const Skip = (props?: BoxProps<SVGElement>) => <Box as={_Skip} {...props} />;
const SortAscending = (props?: BoxProps<SVGElement>) => <Box as={_SortAscending} {...props} />;
const SortDescending = (props?: BoxProps<SVGElement>) => <Box as={_SortDescending} {...props} />;
const Star = (props?: BoxProps<SVGElement>) => <Box as={_Star} {...props} />;
const Swap = (props?: BoxProps<SVGElement>) => <Box as={_Swap} {...props} />;
const Tag = (props?: BoxProps<SVGElement>) => <Box as={_Tag} {...props} />;
const Team = (props?: BoxProps<SVGElement>) => <Box as={_Team} {...props} />;
const TextFiles = (props?: BoxProps<SVGElement>) => <Box as={_TextFiles} {...props} />;
const ThreeD = (props?: BoxProps<SVGElement>) => <Box as={_ThreeD} {...props} />;
const ToggleGrid = (props?: BoxProps<SVGElement>) => <Box as={_ToggleGrid} {...props} />;
const ToggleList = (props?: BoxProps<SVGElement>) => <Box as={_ToggleList} {...props} />;
const TriangleDown = (props?: BoxProps<SVGElement>) => <Box as={_TriangleDown} {...props} />;
const TriangleLeft = (props?: BoxProps<SVGElement>) => <Box as={_TriangleLeft} {...props} />;
const TriangleRight = (props?: BoxProps<SVGElement>) => <Box as={_TriangleRight} {...props} />;
const TriangleUp = (props?: BoxProps<SVGElement>) => <Box as={_TriangleUp} {...props} />;
const Twitter = (props?: BoxProps<SVGElement>) => <Box as={_Twitter} {...props} />;
const Uploads = (props?: BoxProps<SVGElement>) => <Box as={_Uploads} {...props} />;
const User = (props?: BoxProps<SVGElement>) => <Box as={_User} {...props} />;
const Vector = (props?: BoxProps<SVGElement>) => <Box as={_Vector} {...props} />;
const Video = (props?: BoxProps<SVGElement>) => <Box as={_Video} {...props} />;
const VolumeHigh = (props?: BoxProps<SVGElement>) => <Box as={_VolumeHigh} {...props} />;
const VolumeLow = (props?: BoxProps<SVGElement>) => <Box as={_VolumeLow} {...props} />;
const VolumeMuted = (props?: BoxProps<SVGElement>) => <Box as={_VolumeMuted} {...props} />;

export {
  AddMember,
  Air,
  At,
  Audio,
  Bell,
  BoardsAll,
  BoardsGrid,
  BoardsList,
  Boards,
  Bookmark,
  CameraFilled,
  Camera,
  Caution,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircledMinus,
  CircledPlus,
  Clips,
  Clock,
  Close,
  CloudOffline,
  CloudUpload,
  Comment,
  CompressedFiles,
  DashedPlus,
  Database,
  Delete,
  Devices,
  Document,
  DoubleChevronDown,
  DoubleChevronLeft,
  DoubleChevronRight,
  DoubleChevronUp,
  Download,
  Downtick,
  Dropbox,
  Edit,
  Ellipsis,
  Email,
  EyeClosed,
  Eye,
  Facebook,
  Filters,
  Flash,
  FolderOpen,
  Folder,
  FullScreenEnter,
  FullScreenExit,
  Gear,
  Github,
  GoogleDrive,
  Hamburger,
  Help,
  Hide,
  Home,
  Images,
  Import,
  Info,
  Instagram,
  Library,
  LineGraph,
  Link,
  LinkedIn,
  LogOut,
  MagicWand,
  Maximize,
  Medium,
  Minimize,
  Move,
  Notion,
  Pdf,
  Padlock,
  Pause,
  Photos,
  Play,
  PlayPause,
  Plus,
  Presentations,
  Radar,
  Refresh,
  Remove,
  RightArrow,
  Save,
  Search,
  Selects,
  SendFilled,
  Send,
  Share,
  Show,
  Skip,
  SortAscending,
  SortDescending,
  Star,
  Swap,
  Tag,
  Team,
  TextFiles,
  ThreeD,
  ToggleGrid,
  ToggleList,
  TriangleDown,
  TriangleLeft,
  TriangleRight,
  TriangleUp,
  Twitter,
  Uploads,
  User,
  Vector,
  Video,
  VolumeHigh,
  VolumeLow,
  VolumeMuted,
};
