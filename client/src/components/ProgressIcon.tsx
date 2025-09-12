import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import type { SvgIconProps } from '@mui/material';

interface ProgressIconProps {
  progress: number; 
  sx?: SvgIconProps['sx']; 
}

export function ProgressIcon({ progress, sx }: ProgressIconProps) {
  
  if (progress >= 100) {
    return <CheckCircleRoundedIcon sx={sx} color="secondary" />;
  }
  if (progress >= 75) {
    return <ExpandCircleDownRoundedIcon sx={sx} color="secondary" />;
  }
  if (progress >= 50) {
    return <OfflinePinRoundedIcon sx={sx} color="secondary" />;
  }
  if (progress > 0) {
    return <RemoveCircleRoundedIcon sx={sx} color="secondary" />;
  }

  return <CircleRoundedIcon sx={sx} color="secondary" />;
}