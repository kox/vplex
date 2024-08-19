import { Link } from "react-router-dom";
import { Dashboard } from "../pages";
import { Bell, ChartScatter, CircleFadingPlus, Codesandbox, Package2, Search, ShoppingCart, SquareUserRound } from "lucide-react";
import { Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipTrigger } from "@radix-ui/react-tooltip";

export const AsidePanel = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">    
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <Link to=".">link</Link>
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />         
          </Tooltip>
          <Tooltip>
            <Link to=".">link</Link>
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />         
          </Tooltip>
                   
          <Tooltip>
            <TooltipTrigger>
              <Link to=".">
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
          
            <TooltipContent className="TooltipContent" sideOffset={5}>
            Review your Vaults
            
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link to=".">
                <ChartScatter className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
          
            <TooltipContent className="TooltipContent" sideOffset={5}>
              Go to your Analytics
            
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link to=".">
                <CircleFadingPlus className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
          
            <TooltipContent className="TooltipContent" sideOffset={5}>
              Vaults
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link to=".">
                <SquareUserRound className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
          
            <TooltipContent className="TooltipContent" sideOffset={5}>
              Go my Profile
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link to=".">
                <Codesandbox className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
          
            <TooltipContent className="TooltipContent" sideOffset={5}>
              Go my Profile
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link to=".">
                <Bell className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
          
            <TooltipContent className="TooltipContent" sideOffset={5}>
              Notifications
            </TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    );
  };
