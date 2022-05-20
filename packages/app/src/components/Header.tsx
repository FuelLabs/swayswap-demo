import { FocusScope, useFocusManager } from "@react-aria/focus";
import cx from "classnames";
import type { ComponentType, ReactNode } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { MdChecklist, MdSwapCalls } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "./Button";

import fuelLogo from "~/assets/fuel-logo-512x512.png";
import { useWallet } from "~/context/AppContext";
import { Pages } from "~/types/pages";

const style = {
  wrapper: `relative p-4 w-screen flex flex-col sm:flex-row justify-between items-center`,
  headerLogo: `absolute top-4 left-4 flex items-center justify-start`,
  nav: `flex-1 flex justify-center items-center mt-2 sm:mt-0`,
  navItemsContainer: `px-1 gap-1 flex bg-gray-800 rounded-3xl`,
  navItem: `py-1 px-3 my-1 text-base rounded-full border-transparent text-gray-400 hover:bg-gray-500/20 hover:text-gray-200`,
  activeNavItem: `bg-gray-500/20 text-gray-200`,
  buttonsContainer: `flex justify-end items-center`,
  button: `flex items-center bg-gray-800 rounded-2xl mx-2 font-semi-bold`,
  buttonPadding: `p-2`,
  navIcon: `text-gray-500 stroke-current`,
};

const HeaderNav = ({
  onPress,
  isActive,
  icon: Icon,
  children,
}: {
  onPress: () => void;
  isActive: boolean;
  icon: ComponentType<any>;
  children: ReactNode;
}) => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: any) => {
    // eslint-disable-next-line default-case
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusNext({ wrap: true });
        break;
      case "ArrowLeft":
        focusManager.focusPrevious({ wrap: true });
        break;
    }
  };

  return (
    <Button
      onKeyDown={onKeyDown}
      variant="ghost"
      size="lg"
      onPress={onPress}
      className={cx(style.navItem, {
        [style.activeNavItem]: isActive,
      })}
    >
      <Icon
        className={cx("text-primary-gray", { "text-primary-400": isActive })}
      />
      {children}
    </Button>
  );
};

const Header = () => {
  const wallet = useWallet();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <img src={fuelLogo} alt="swayswap" height={40} width={40} />
      </div>
      {wallet && (
        <div className={style.nav}>
          <FocusScope>
            <div className={style.navItemsContainer}>
              <HeaderNav
                icon={MdSwapCalls}
                onPress={() => navigate(Pages.swap)}
                isActive={location.pathname === Pages.swap}
              >
                Swap
              </HeaderNav>
              <HeaderNav
                icon={BiDollarCircle}
                onPress={() => navigate(Pages.pool)}
                isActive={location.pathname.includes(Pages.pool)}
              >
                Pool
              </HeaderNav>
              <HeaderNav
                icon={MdChecklist}
                onPress={() => navigate(Pages.assets)}
                isActive={location.pathname.includes(Pages.assets)}
              >
                Assets
              </HeaderNav>
            </div>
          </FocusScope>
        </div>
      )}
    </div>
  );
};

export default Header;
