<template>
  <aside class="site-sidebar">
    <div class="sidebar-block sidebar-block--border-bottom text--align-center">
      <div class="sidebar-block__logo">
        <img src="/icons/wizz-logo.svg" alt="WizzAir">
      </div>
      <div class="sidebar-block__short-details">
        <span class="sidebar-block__editable text--primary-blue text--uppercase">
          <strong contenteditable="true">
            BUDAPEST ― london luton<br>
            1 passenger
          </strong>
        </span>
        <span class="sidebar-block__edit-icon">
          <img src="/icons/icon-edit.svg" alt="edit">
        </span>
      </div>
    </div>

    <div class="sidebar-block sidebar-block--arrow-after">
      <div class="sidebar-block__content flights">
        <div class="display-flex sidebar-block__title">
          <img src="/icons/icon-check.svg" alt="checked">
          Flights
          <span class="text--primary-blue margin-left--auto">
            Ft41,980
          </span>
        </div>

        <div class="sidebar-block__flight-details">
          <div class="date">
            <span class="date__month">jan</span>
            <span class="date__day">27</span>
          </div>
          <div class="sidebar-block__flight-info">
            <div class="sidebar-block__flight-text sidebar-block__flight-title ">
              Budapest – <br>London Luton
            </div>
            <div class="sidebar-block__flight-text sidebar-block__flight-text--small ">
              Wed 06:00 – 07:35 (W6 2201)
            </div>
          </div>
          <div class="sidebar-block__flight-text sidebar-block__flight-text--small">
            <strong>Basic fare,</strong> 1 × Flight ticket,  <br>
            1 × Administration fee
          </div>
        </div>

        <div class="sidebar-block__flight-details sidebar-block__flight-details--last">
          <div class="date">
            <span class="date__month">jan</span>
            <span class="date__day">31</span>
          </div>
          <div class="sidebar-block__flight-info">
            <div class="sidebar-block__flight-text sidebar-block__flight-title ">
              London Luton – <br>Budapest
            </div>
            <div class="sidebar-block__flight-text sidebar-block__flight-text--small ">
              Wed 06:00 – 07:35 (W6 2201)
            </div>
          </div>
          <div class="sidebar-block__flight-text sidebar-block__flight-text--small">
            <strong>Basic fare,</strong> 1 × Flight ticket,  <br>
            1 × Administration fee
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-block sidebar-block--white sidebar-block--arrow-after sidebar-block--arrow-after--white">
      <div class="display-flex sidebar-block__title margin-bottom--0">
        Passengers
      </div>
      <h3 class="form-block__title display-flex align-items--center margin-bottom--15 margin-top--15">
        <span class="form-block__avatar">
          <img src="/icons/icon-avatar-male.svg" class="form-block__avatar-icon">
        </span>
        <span class="form-block__title--medium">Adult 1 </span>
      </h3>
      <div class="form-block__inputs">
        <div class="form-block__input-group input-checkbox">
          <input
            id="passengerDetails"
            type="checkbox"
            class="form-block__input--checkbox form-block__input--checkbox--circle"
            name="passengerDetails"
            value=""
          />
          <label class="form-block__label--checkbox" for="passengerDetails">
            <strong class="text--gray">Please fill out passengers details</strong>
          </label>
        </div>
      </div>
    </div>

    <div class="sidebar-block  sidebar-block--arrow-after">
      <div class="display-flex sidebar-block__title margin-bottom--0">
        seats
      </div>
    </div>

    <div class="sidebar-block  sidebar-block--arrow-after">
      <div class="display-flex sidebar-block__title margin-bottom--0">
        services
      </div>
    </div>

    <div class="sidebar-block">
      <div class="display-flex sidebar-block__title margin-bottom--0">
        PAYMENT
      </div>
    </div>

    <div class="sidebar-block  sidebar-block--summary">
      <div class="summary">
        <div class="summary__label">
          <img src="/icons/icon-cart.svg" alt="checked">
          <strong class="text--uppercase">Total</strong> in
          <select class="summary__select">
            <option value="huf">
              HUF
            </option>
            <option value="gbp">
              GBP
            </option>
            <option value="eur">
              EUR
            </option>
            <option value="chf">
              CHF
            </option>
          </select>
        </div>
        <div class="summary__price">
          Ft41,980
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.site-sidebar {
  width: 300px;
  flex: 1 0 300px;
  max-width: 300px;
  min-height: 100vh;
  height: 100%;
  display: block;
  background: var(--main-bg-color);
  box-shadow: var(--shadow-light);
  position: fixed;
  z-index: 1;

  .sidebar-block {
    display: flex;
    flex-direction: column;
    padding:16px 20px;
    width: 100%;

    &--white {
      background: #fff;
    }

    &--border-bottom  {
      border-bottom: 1px solid #c1c1c1;
    }

    &--arrow-after {
      position: relative;
      border-bottom: 2px dotted #c1c1c1;

      &:after {
        width: 14px;
        height: 14px;
        transform: rotate(45deg) translateX(-50%);
        border: 1px solid #c1c1c1;
        border-left: none;
        border-top: none;
        background: var(--main-bg-color);
        content: '';
        left: 50%;
        z-index: 2;
        bottom: -14px;
        position: absolute;
      }

      &--white {

        &:after {
          background: #fff;
        }

      }

    }

    &__logo {
      margin-bottom: 16px;
    }

    &__title {
      font-weight: 700;
      margin-bottom: 15px;
      text-transform: uppercase;
    }

    &__short-details {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__flight-details--last {
      margin-top: 5px;
    }

    &__editable {
      max-width: calc(100% - 20px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      -ms-word-break: break-all;
      word-break: break-all;
      word-break: break-word;
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }

    &__edit-icon {
      cursor: pointer;
      margin-left:10px;
      display: inline-block;
    }

    &__flight-details {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    &__flight-title {
      font-size: 16px;
      line-height: 18px;
      display: inline-flex;
      font-weight: 700;
      margin-bottom: 15px;
    }

    &__flight-text {
      width: 100%;
      flex: 1 0 100%;
      display: block;
      margin-bottom: 3px;

      &--small {
        font-size: 12px;
        line-height:15px;
        flex: 1 0 100%;
        max-width: 100%;
      }
    }

    &__flight-info {
      flex: 1 0 calc(100% - 52px);
      max-width: calc(100% - 52px);
      width: calc(100% - 52px);
      margin-top: -3px;
    }

    &--summary {
      background: var(--color-primary);
      color: #fff;

    }

  }

  .date {
    display: inline-flex;
    background: #fff;
    text-align: center;
    border-radius: var(--border-radius);
    border: 2px solid var(--color-gray);
    flex-direction: column;
    width: 40px;
    height: 46px;
    margin-right: 12px;

    &__month {
      font-size: 14px;
      line-height: 18px;
      background: var(--main-bg-color);
      text-transform: uppercase;
    }

    &__day {
      font-size: 18px;
      line-height: 23px;
      font-weight: 700;
    }

  }

  .summary {
    font-size: 16px;
    line-height: 20px;
    display: flex;

    &__select {
      border-radius: var(--border-radius);
      background: #3434E0;
      color: #fff;
      border: none;
      padding: 8px;
      padding-right: 14px;
      appearance: none;
      font-size: 16px;
      margin-left: 6px;
      position: relative;
      background-image: url(/icons/icon-arrow-down.svg);
      background-position: calc(100% - 4px) center;
      background-repeat: no-repeat;

      option {
          font-size: 14px;
          padding: 4px 8px;
          border-radius: var(--border-radius);
          background: #fff;
          color: var(--color-primary);
        }

    }

    &__price {
      margin-left: auto;
      font-weight: 700;
      display: flex;
      align-items: center;
    }

  }

}

@media screen and (max-width: 768px) {
  .site-sidebar{
    display: none;
  }
}
</style>
