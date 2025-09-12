import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import type { SvgIconProps } from '@mui/material';

interface ProgressIconProps {
  progress: number; 
  sx?: SvgIconProps['sx']; 
}

export function ProgressIcon({ progress, sx }: ProgressIconProps) {
  
  if (progress >= 100) {
    return <CheckCircleOutlineOutlinedIcon sx={sx} color="secondary" />;
  }
  if (progress >= 75) {
    return <ExpandCircleDownOutlinedIcon sx={sx} color="secondary" />;
  }
  if (progress >= 50) {
    return <OfflinePinOutlinedIcon sx={sx} color="secondary" />;
  }
  if (progress > 0) {
    return <RemoveCircleOutlineOutlinedIcon sx={sx} color="secondary" />;
  }

  return <CircleOutlinedIcon sx={sx} color="secondary" />;
}