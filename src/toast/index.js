import React from 'react';
import { render } from 'react-dom';
import './style.scss';

const toastUniqueID = 'geek-toast-marker';

export const ToastMarker = () => <div id={toastUniqueID} />;

let toastTimeout = null;

const wait = t => new Promise(r => setTimeout(r, t));

export const toastSuccess = (content, options) =>
  toast(content, { ...options, className: 'geekalert success' });

export const toastWarning = (content, options) =>
  toast(content, { ...options, className: 'geekalert warning' });

export const toastInfo = (content, options) =>
  toast(content, { ...options, className: 'geekalert info' });

export const toastError = (content, options) =>
  toast(content, { ...options, className: 'geekalert error' });

const toast = async (content, options = {}) => {
  let alertRef = null;
  const opt = {
    className: 'geekalert',
    timeout: 4000,
    divId: 'toast-override',
    icon: false,
    ...options,
    content,
  };
  const isInline = !!document.getElementById(opt.divId);
  const rootElement = document.getElementById(opt.divId) || document.getElementById(toastUniqueID);
  if (!rootElement) {
    alert('Alert Marker not found!'); // eslint-disable-line
    return;
  }
  const close = async () => {
    if (alertRef) {
      alertRef.className = alertRef.className.replace('entrance', 'exit');
      await wait(500);
    }
    document.body.className = '';
    render(<ToastMarker />, rootElement);
  };
  close();
  await wait(5);
  const renderContent = () => {
    if (typeof opt.content === 'function') return opt.content(close);
    return opt.content;
  };

  const renderToast = () => (
    <div className={opt.className}>
        {opt.icon && (
          <div className="checkmark-wrapper">
            <div className="checkmark-icon">
              icon
            </div>
          </div>
        )}
        {renderContent()}
    </div>
  );

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    close();
  }, opt.timeout);

  if (isInline) {
    render(
      renderToast(),
      rootElement,
    );
    return;
  }

  render(
    <div className="notification-wrapper">
      <div ref={r => alertRef = r} className="notification-alert alert-animation entrance">
        {renderToast()}
      </div>
    </div>,
    rootElement,
  );
};

export default ToastMarker;
