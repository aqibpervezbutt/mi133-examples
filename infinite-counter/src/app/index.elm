import Html

import Reducer exposing (initialState, reducer)
import App exposing (app)
import Actions exposing (Action)
import State exposing (State)

subscriptions : State -> Sub Action
subscriptions model = Sub.none

main = Html.program {
        init = initialState,
        view = app,
        update = reducer,
        subscriptions = subscriptions
    }
