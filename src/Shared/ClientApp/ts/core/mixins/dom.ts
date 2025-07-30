import $ from 'jquery/dist/jquery.slim';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

export const query = (selectors: string) => $(selectors);
export const beforeProcessing = () => query('.loading-indicator').show();
export const afterProcessing = () => query('.loading-indicator').hide();

export function showModal(selector: string, onShow?: () => void, onHide?: () => void) {
  const dialogEl = document.querySelector(selector);
  new bootstrap.Modal(dialogEl).show();
  onShow && dialogEl.addEventListener('shown.bs.modal', onShow);
  onHide && dialogEl.addEventListener('hide.bs.modal', onHide);
}

export function hideModal(selector: string, onHide?: () => void) {
  const dialogEl = document.querySelector(selector);
  new bootstrap.Modal(dialogEl).hide();
  onHide && dialogEl.addEventListener('hide.bs.modal', onHide);
}